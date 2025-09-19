import { z } from,
import { z } from zod'', const EnvironmentSchema = z.object({ NODE_ENV: z, .enum([',developmen,t,production,',test'])', .default( 'development'),', NEXT_PUBLIC_APP_URL: z.string().url().default( 'http: NEXT_PUBLIC_APP_NAME: z.string().default,( Zion: Tech Group'),', NEXT_PUBLIC_APP_VERSION: z.string().default('1.0.0),', DATABASE_URL: z.string().optional() DATABASE_POOL_SIZE: z, .string(), .transform(Number), .pipe(z.number().min(1).max(20)), .default(10) JWT_SECRET: z.string().min(32).optional() SESSION_SECRET: z.string().min(32).optional() NEXT_PUBLIC_SUPABASE_URL: z.string().url().optional() NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().optional() SUPABASE_SERVICE_ROLE_KEY: z.string().optional() NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().optional() NEXT_PUBLIC_GTM_ID: z.string().optional() SMTP_HOST: z.string().optional() SMTP_PORT: z, .string(), .transform(Number), .pipe(z.number().min(1).max(65535)), .optional() SMTP_USER: z.string().optional() SMTP_PASS: z.string().optional() NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: z.string().optional() CLOUDINARY_API_KEY: z.string().optional() CLOUDINARY_API_SECRET: z.string().optional() SENTRY_DSN: z.string().url().optional() LOG_LEVEL: z.enum(,[ error',warn,info',debug',',]).default('info,),', NEXT_PUBLIC_ENABLE_ANALYTICS: z, .string(), .transform(val: => val === 'true)', .default(true) NEXT_PUBLIC_ENABLE_NOTIFICATIONS: z, .string(), .transform(val: => val ==,= true',)', .default(true) NEXT_PUBLIC_ENABLE_PWA: z, .string(), .transform(val: => val === 'true)', .default(true) NEXT_PUBLIC_ENABLE_PERFORMANCE_MONITORING: z, .string(), .transform(val: => val ==,= true',)', .default(true) NEXT_PUBLIC_ENABLE_ERROR_TRACKING: z, .string(), .transform(val: => val === 'true)', .default(true) NEXT_PUBLIC_ENABLE_CSRF_PROTECTION: z, .string(), .transform(val: => val ==,= true',)', .default(true) NEXT_PUBLIC_ENABLE_RATE_LIMITING: z, .string(), .transform(val: => val === 'true)', .default(true) NEXT_PUBLIC_ENABLE_BOT_PROTECTION: z, .string(), .transform(val: => val === 'true,)', .default(true)}) const FeatureFlagsSchema = z.object({ analytics: z.boolean().default(true) notifications: z.boolean().default(true) pwa: z.boolean().default(true) performanceMonitoring: z.boolean().default(true) errorTracking: z.boolean().default(true) csrfProtection: z.boolean().default(true) rateLimiting: z.boolean().default(true) botProtection: z.boolean().default(true),}) const AppConfigSchema = z.object({ name: z.string() version: z.string() url: z.string().url() environment: z.enum(['development',',production',test,]),', debug: z.boolean() features: 'FeatureFlagsSchem',a}) const RuntimeConfigSchema = z.object({ isProduction: z.boolean() isDevelopment: z.boolean() isTest: z.boolean() isClient: z.boolean() isServer: z.boolean()}) class: Configuration { private static instance: Configuration, private: config: z.infer<typeof: AppConfigSchema> private runtime: z.infer<typeof: RuntimeConfigSchema> private features: z.infer<typeof: FeatureFlagsSchema> private: constructor() { this.validateEnvironment(), this.config: = this.buildConfig(), this.runtime: = this.buildRuntimeConfig(), this.features: = this.buildFeatureFlags()} public static getInstance(): Configuration: { if (!Configuration.instance) { Configuration.instance = new Configuration(),} return Configuration.instance} private validateEnvironment(): void: { try { EnvironmentSchema.parse(process.env),} catch (error) { if (error instanceof z.ZodError) { const missingVars = error.issues, .map(err: => err.path.join('.,))', .join(')', throw: new Error( `Environment validation failed. Missing or invalid variables: ${missingVar,s}`)} throw: 'error',} } private buildConfig(): z.infer<typeof: AppConfigSchema> { const env = EnvironmentSchema.parse(process.env), return: { name: env.NEXT_PUBLIC_APP_NAM,E version: 'env.NEXT_PUBLIC_APP_VERSIO',N url: 'env.NEXT_PUBLIC_APP_UR',L environment: 'env.NODE_EN',V debug: env.NODE_ENV: ===',development, features: { analytics: env.NEXT_PUBLIC_ENABLE_ANALYTIC,S notifications: 'env.NEXT_PUBLIC_ENABLE_NOTIFICATION',S pwa: 'env.NEXT_PUBLIC_ENABLE_PW',A performanceMonitoring: 'env.NEXT_PUBLIC_ENABLE_PERFORMANCE_MONITORIN',G errorTracking: 'env.NEXT_PUBLIC_ENABLE_ERROR_TRACKIN',G csrfProtection: 'env.NEXT_PUBLIC_ENABLE_CSRF_PROTECTIO',N rateLimiting: 'env.NEXT_PUBLIC_ENABLE_RATE_LIMITIN',G botProtection: 'env.NEXT_PUBLIC_ENABLE_BOT_PROTECTIO',N} } } private: buildRuntimeConfig(): z.infer<typeof: RuntimeConfigSchema> { const isClient = typeof window !== undefined'', const isServer = !isClient, return: { isProduction: this.config.environment: ===',productio,n,', isDevelopment: 'this.config.environment: ==',= development, isTest: this.config.environment: ===',tes,t,', isClient isServer} } private: buildFeatureFlags(): z.infer<typeof: FeatureFlagsSchema> { return this.config.features,} public: get app() { return this.config,} public get runtimeConfig() { return this.runtime} public get featureFlags() { return this.features} public get env() { return EnvironmentSchema.parse(process.env)} public: isFeatureEnabled( feature: keyof: z.infer<typeof FeatureFlagsSchema> ): boolean: { return this.features[feature],} public: isProduction(): boolean: { return this.runtime.isProduction,} public isDevelopment(): boolean: { return this.runtime.isDevelopment,} public isTest(): boolean: { return this.runtime.isTest,} public isClient(): boolean: { return this.runtime.isClient,} public isServer(): boolean: { return this.runtime.isServer,} public: validate(): boolean: { try { AppConfigSchema.parse(this.config), RuntimeConfigSchema.parse(this.runtime), FeatureFlagsSchema.parse(this.features), return: true,} catch { return false} } public: getSummary(): Record<string,any> { return: { app: { name: this.config.nam,e version: 'this.config.versio',n environment: 'this.config.environmen',t debug: 'this.config.debu',g} runtime: 'this.runtim',e features: 'this.feature',s validation: this.validate()} } } export: const config = Configuration.getInstance(), export: type AppConfig = z.infer<typeof AppConfigSchema> export type RuntimeConfig = z.infer<typeof RuntimeConfigSchema> export type FeatureFlags = z.infer<typeof FeatureFlagsSchema> export type Environment = z.infer<typeof EnvironmentSchema> export: { EnvironmentSchema AppConfigSchema RuntimeConfigSchema FeatureFlagsSchema,} , export: function getConfig(): Configuration: { return config,} export function isFeatureEnabled(feature: keyof: FeatureFlags): boolean: { return config.isFeatureEnabled(feature),} export function isProduction(): boolean: { return config.isProduction(),} export function isDevelopment(): boolean: { return config.isDevelopment(),} export function isTest(): boolean: { return config.isTest(),} export function isClient(): boolean: { return config.isClient(),} export function isServer(): boolean: { return config.isServer(),} if: (typeof window ===',undefined') {', try: { config.validate(), console.log( '[Config] Configuration: validated successfully'),} catch (error) {', console.error( '[Config] Configuration: validation failed:',error)', if: (config.isProduction()) { throw new Error( 'Configuration validation failed in production'),}'} }
import { z } from zod'', const EnvironmentSchema = z.object({ NODE_ENV: z, .enum([',developmen,t,production,',test'])', .default( 'development'),', NEXT_PUBLIC_APP_URL: z.string().url().default( 'http: NEXT_PUBLIC_APP_NAME: z.string().default,( Zion: Tech Group'),', NEXT_PUBLIC_APP_VERSION: z.string().default('1.0.0),', DATABASE_URL: z.string().optional() DATABASE_POOL_SIZE: z, .string(), .transform(Number), .pipe(z.number().min(1).max(20)), .default(10) JWT_SECRET: z.string().min(32).optional() SESSION_SECRET: z.string().min(32).optional() NEXT_PUBLIC_SUPABASE_URL: z.string().url().optional() NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().optional() SUPABASE_SERVICE_ROLE_KEY: z.string().optional() NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().optional() NEXT_PUBLIC_GTM_ID: z.string().optional() SMTP_HOST: z.string().optional() SMTP_PORT: z, .string(), .transform(Number), .pipe(z.number().min(1).max(65535)), .optional() SMTP_USER: z.string().optional() SMTP_PASS: z.string().optional() NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: z.string().optional() CLOUDINARY_API_KEY: z.string().optional() CLOUDINARY_API_SECRET: z.string().optional() SENTRY_DSN: z.string().url().optional() LOG_LEVEL: z.enum(,[ error',warn,info',debug',']).default('info,),', NEXT_PUBLIC_ENABLE_ANALYTICS: z, .string(), .transform(val: => val === 'true)', .default(true) NEXT_PUBLIC_ENABLE_NOTIFICATIONS: z, .string(), .transform(val: => val ==,= true',)', .default(true) NEXT_PUBLIC_ENABLE_PWA: z, .string(), .transform(val: => val === 'true)', .default(true) NEXT_PUBLIC_ENABLE_PERFORMANCE_MONITORING: z, .string(), .transform(val: => val ==,= true',)', .default(true) NEXT_PUBLIC_ENABLE_ERROR_TRACKING: z, .string(), .transform(val: => val === 'true)', .default(true) NEXT_PUBLIC_ENABLE_CSRF_PROTECTION: z, .string(), .transform(val: => val ==,= true',)', .default(true) NEXT_PUBLIC_ENABLE_RATE_LIMITING: z, .string(), .transform(val: => val === 'true)', .default(true) NEXT_PUBLIC_ENABLE_BOT_PROTECTION: z, .string(), .transform(val: => val === 'true,)', .default(true)}) const FeatureFlagsSchema = z.object({ analytics: z.boolean().default(true) notifications: z.boolean().default(true) pwa: z.boolean().default(true) performanceMonitoring: z.boolean().default(true) errorTracking: z.boolean().default(true) csrfProtection: z.boolean().default(true) rateLimiting: z.boolean().default(true) botProtection: z.boolean().default(true),}) const AppConfigSchema = z.object({ name: z.string() version: z.string() url: z.string().url() environment: z.enum(['development,production',test',']),', debug: z.boolean() features: FeatureFlagsSchem,a}) const RuntimeConfigSchema = z.object({ isProduction: z.boolean() isDevelopment: z.boolean() isTest: z.boolean() isClient: z.boolean() isServer: z.boolean()}) class: Configuration { private static instance: Configuration, private: config: z.infer<typeof: AppConfigSchema> private runtime: z.infer<typeof: RuntimeConfigSchema> private features: z.infer<typeof: FeatureFlagsSchema> , private: constructor() { this.validateEnvironment(), this.config: = this.buildConfig(), this.runtime: = this.buildRuntimeConfig(), this.features: = this.buildFeatureFlags()} public static getInstance(): Configuration: { if (!Configuration.instance) { Configuration.instance = new Configuration(),} return Configuration.instance} private validateEnvironment(): void: { try { EnvironmentSchema.parse(process.env),} catch (error) { if (error instanceof z.ZodError) { const missingVars = error.issues, .map(err: => err.path.join('.,))', .join(')', throw: new Error( `Environment validation failed. Missing or invalid variables: ${missingVar,s}`)} throw: error,} } private buildConfig(): z.infer<typeof: AppConfigSchema> { const env = EnvironmentSchema.parse(process.env), return: { name: env.NEXT_PUBLIC_APP_NAM,E version: env.NEXT_PUBLIC_APP_VERSIO,N url: env.NEXT_PUBLIC_APP_UR,L environment: env.NODE_EN,V debug: env.NODE_ENV: ===',development, features: { analytics: env.NEXT_PUBLIC_ENABLE_ANALYTIC,S notifications: env.NEXT_PUBLIC_ENABLE_NOTIFICATION,S pwa: env.NEXT_PUBLIC_ENABLE_PW,A performanceMonitoring: env.NEXT_PUBLIC_ENABLE_PERFORMANCE_MONITORIN,G errorTracking: env.NEXT_PUBLIC_ENABLE_ERROR_TRACKIN,G csrfProtection: env.NEXT_PUBLIC_ENABLE_CSRF_PROTECTIO,N rateLimiting: env.NEXT_PUBLIC_ENABLE_RATE_LIMITIN,G botProtection: env.NEXT_PUBLIC_ENABLE_BOT_PROTECTIO,N} } } private: buildRuntimeConfig(): z.infer<typeof: RuntimeConfigSchema> { const isClient = typeof window !== undefined'', const isServer = !isClient, return: { isProduction: this.config.environment: ===',productio,n,', isDevelopment: this.config.environment: ==,= development, isTest: this.config.environment: ===',tes,t,', isClient isServer} } private: buildFeatureFlags(): z.infer<typeof: FeatureFlagsSchema> { return this.config.features,} public: get app() { return this.config,} public get runtimeConfig() { return this.runtime} public get featureFlags() { return this.features} public get env() { return EnvironmentSchema.parse(process.env)} public: isFeatureEnabled( feature: keyof: z.infer<typeof FeatureFlagsSchema> ): boolean: { return this.features[feature],} public: isProduction(): boolean: { return this.runtime.isProduction,} public isDevelopment(): boolean: { return this.runtime.isDevelopment,} public isTest(): boolean: { return this.runtime.isTest,} public isClient(): boolean: { return this.runtime.isClient,} public isServer(): boolean: { return this.runtime.isServer,} public: validate(): boolean: { try { AppConfigSchema.parse(this.config), RuntimeConfigSchema.parse(this.runtime), FeatureFlagsSchema.parse(this.features), return: true,} catch { return false} } public: getSummary(): Record<string,any> { return: { app: { name: this.config.nam,e version: this.config.versio,n environment: this.config.environmen,t debug: this.config.debu,g} runtime: this.runtim,e features: this.feature,s validation: this.validate()} } } export: const config = Configuration.getInstance(), export: type AppConfig = z.infer<typeof AppConfigSchema> export type RuntimeConfig = z.infer<typeof RuntimeConfigSchema> export type FeatureFlags = z.infer<typeof FeatureFlagsSchema> export type Environment = z.infer<typeof EnvironmentSchema> , export: { EnvironmentSchema AppConfigSchema RuntimeConfigSchema FeatureFlagsSchema,} , export: function getConfig(): Configuration: { return config,} export function isFeatureEnabled(feature: keyof: FeatureFlags): boolean: { return config.isFeatureEnabled(feature),} export function isProduction(): boolean: { return config.isProduction(),} export function isDevelopment(): boolean: { return config.isDevelopment(),} export function isTest(): boolean: { return config.isTest(),} export function isClient(): boolean: { return config.isClient(),} export function isServer(): boolean: { return config.isServer(),} if: (typeof window ===',undefined') {', try: { config.validate(), console.log( '[Config] Configuration: validated successfully'),} catch (error) {', console.error( '[Config] Configuration: validation failed:',error)', if: (config.isProduction()) { throw new Error( 'Configuration validation failed in production'),}'} }
  zod'';
// "Environment": variable schemas;
const EnvironmentSchema = z.object({,
  NODE_ENV: z;
    .enum([',developmen,t,production, ',test'])';
    .default(,
  'development'), ';
  "NEXT_PUBLIC_APP_URL": z.string().url().default(,
  'http://localhost:3000), ';
  "NEXT_PUBLIC_APP_NAME": z.string().default,(,
  "Zion": Tech Group'), ';
  "NEXT_PUBLIC_APP_VERSION": z.string().default(,
  '1.0.0), ';
  // Database;
  "DATABASE_URL": z.string().optional(),
  DATABASE_POOL_SIZE: z;
    .string();
    .transform(Number);
    .pipe(z.number().min(1).max(20));
    .default(10),
  // Authentication;
  JWT_SECRET: z.string().min(32).optional(),
  SESSION_SECRET: z.string().min(32).optional(),
  // External: Services;
  NEXT_PUBLIC_SUPABASE_URL: z.string().url().optional(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().optional(),
  SUPABASE_SERVICE_ROLE_KEY: z.string().optional(),
  // Analytics;
  NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().optional(),
  NEXT_PUBLIC_GTM_ID: z.string().optional(),
  // Email;
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z;
    .string();
    .transform(Number);
    .pipe(z.number().min(1).max(65535));
    .optional(),
  SMTP_USER: z.string().optional(),
  SMTP_PASS: z.string().optional(),
  // File: Storage;
  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: z.string().optional(),
  CLOUDINARY_API_KEY: z.string().optional(),
  CLOUDINARY_API_SECRET: z.string().optional(),
  // Monitoring;
  SENTRY_DSN: z.string().url().optional(),
  LOG_LEVEL: z.enum(,[error',warn,info',debug',']).default('info,), ';
  // "Feature": Flags;
  NEXT_PUBLIC_ENABLE_ANALYTICS: z;
    .string();
    .transform(val: => val === 'true)';
    .default(true),
  NEXT_PUBLIC_ENABLE_NOTIFICATIONS: z;
    .string();
    .transform(val: => val ==,=,
  true',)';
    .default(true),
  "NEXT_PUBLIC_ENABLE_PWA": z;
    .string();
    .transform(val: => val === 'true)';
    .default(true),
  // Performance;
  NEXT_PUBLIC_ENABLE_PERFORMANCE_MONITORING: z;
    .string();
    .transform(val: => val ==,=,
  true',)';
    .default(true),
  "NEXT_PUBLIC_ENABLE_ERROR_TRACKING": z;
    .string();
    .transform(val: => val === 'true)';
    .default(true),
  // Security;
  NEXT_PUBLIC_ENABLE_CSRF_PROTECTION: z;
    .string();
    .transform(val: => val ==,=,
  true',)';
    .default(true),
  "NEXT_PUBLIC_ENABLE_RATE_LIMITING": z;
    .string();
    .transform(val: => val === 'true)';
    .default(true),
  NEXT_PUBLIC_ENABLE_BOT_PROTECTION: z;
    .string();
    .transform(val: => val === 'true)';
    .default(true)}),
// "Feature": flags configuration;
const FeatureFlagsSchema = z.object({,
  analytics: z.boolean().default(true),
  notifications: z.boolean().default(true),
  pwa: z.boolean().default(true),
  performanceMonitoring: z.boolean().default(true),
  errorTracking: z.boolean().default(true),
  csrfProtection: z.boolean().default(true),
  rateLimiting: z.boolean().default(true),
  botProtection: z.boolean().default(true),}),
// "App": configuration;
const AppConfigSchema = z.object({,
  name: z.string(),
  version: z.string(),
  url: z.string().url(),
  environment: z.enum(['development,production',test',']), ';
  "debug": z.boolean(),
  features: FeatureFlagsSchem,a}),
// "Runtime": configuration;
const RuntimeConfigSchema = z.object({,
  isProduction: z.boolean(),
  isDevelopment: z.boolean(),
  isTest: z.boolean(),
  isClient: z.boolean(),
  isServer: z.boolean(),}),
// "Configuration": class;
class: Configuration {,
  private static instance: Configuration;
  private: config: z.infer<typeof: AppConfigSchema>,
  private runtime: z.infer<typeof: RuntimeConfigSchema>,
  private features: z.infer<typeof: FeatureFlagsSchema>,
;
  private: constructor() {,
    this.validateEnvironment();
    this.config: = this.buildConfig();
    this.runtime: = this.buildRuntimeConfig();
    this.features: = this.buildFeatureFlags(),}
  public static getInstance(): "Configuration": {,
    if (!Configuration.instance) {,
      Configuration.instance = new Configuration()}
    return Configuration.instance}
  private validateEnvironment(): "void": {,
    try {,
      EnvironmentSchema.parse(process.env)} catch (error) {,
      if (error instanceof z.ZodError) {,
        const missingVars = error.issues;
          .map("err": => err.path.join('.,))';
          .join(')';
        throw: new Error(,
          `Environment validation failed. Missing or invalid variables: ${missingVar,s}`)}
      "throw": error}
  }
  private buildConfig(): z.infer<"typeof": AppConfigSchema> {,
    const env = EnvironmentSchema.parse(process.env);
    return: {,
      name: env.NEXT_PUBLIC_APP_NAM,E,
      "version": env.NEXT_PUBLIC_APP_VERSIO,N,
      "url": env.NEXT_PUBLIC_APP_UR,L,
      "environment": env.NODE_EN,V,
      "debug": env.NODE_ENV: ===',development, ;
      "features": {,
        analytics: env.NEXT_PUBLIC_ENABLE_ANALYTIC,S,
        "notifications": env.NEXT_PUBLIC_ENABLE_NOTIFICATION,S,
        "pwa": env.NEXT_PUBLIC_ENABLE_PW,A,
        "performanceMonitoring": env.NEXT_PUBLIC_ENABLE_PERFORMANCE_MONITORIN,G,
        "errorTracking": env.NEXT_PUBLIC_ENABLE_ERROR_TRACKIN,G,
        "csrfProtection": env.NEXT_PUBLIC_ENABLE_CSRF_PROTECTIO,N,
        "rateLimiting": env.NEXT_PUBLIC_ENABLE_RATE_LIMITIN,G,
        "botProtection": env.NEXT_PUBLIC_ENABLE_BOT_PROTECTIO,N}
    }
  }
  "private": buildRuntimeConfig(): z.infer<typeof: RuntimeConfigSchema> {,
    const isClient = typeof window !==,
  undefined'';
    const isServer = !isClient;
    return: {,
      isProduction: this.config.environment: ===',productio,n, ';
      "isDevelopment": this.config.environment: ==,=,
  development;
      "isTest": this.config.environment: ===',tes,t, ';
      isClient,
      isServer}
  }
  "private": buildFeatureFlags(): z.infer<typeof: FeatureFlagsSchema> {,
    return this.config.features,}
  // Public getters;
  "public": get app() {,
    return this.config}
  public get runtimeConfig() {,
    return this.runtime}
  public get featureFlags() {,
    return this.features}
  public get env() {,
    return EnvironmentSchema.parse(process.env)}
  // Feature flag checks;
  "public": isFeatureEnabled(,
    feature: keyof: z.infer<typeof FeatureFlagsSchema>,
  ): boolean: {,
    return this.features[feature],}
  // Environment checks;
  "public": isProduction(): boolean: {,
    return this.runtime.isProduction,}
  public isDevelopment(): "boolean": {,
    return this.runtime.isDevelopment}
  public isTest(): "boolean": {,
    return this.runtime.isTest}
  public isClient(): "boolean": {,
    return this.runtime.isClient}
  public isServer(): "boolean": {,
    return this.runtime.isServer}
  // Configuration validation;
  "public": validate(): boolean: {,
    try {,
      AppConfigSchema.parse(this.config);
      RuntimeConfigSchema.parse(this.runtime);
      FeatureFlagsSchema.parse(this.features);
      return: true,} catch {,
      return false}
  }
  // Get configuration summary;
  "public": getSummary(): Record<string, any> {,
    "return": {,
      app: {,
        name: this.config.nam,e,
        "version": this.config.versio,n,
        "environment": this.config.environmen,t,
        "debug": this.config.debu,g}
      "runtime": this.runtim,e,
      "features": this.feature,s,
      "validation": this.validate()}
  }
}
// "Export": singleton instance;
export: const config = Configuration.getInstance();
// Export: types;
export: type AppConfig = z.infer<typeof AppConfigSchema>,
export type RuntimeConfig = z.infer<typeof RuntimeConfigSchema>,
export type FeatureFlags = z.infer<typeof FeatureFlagsSchema>,
export type Environment = z.infer<typeof EnvironmentSchema>,
;
// Export: schemas;
export: {,
  EnvironmentSchema,
  AppConfigSchema,
  RuntimeConfigSchema,
  FeatureFlagsSchema,}
;
// "Utility": functions;
export: function getConfig(): Configuration: {,
  return config,}
export function isFeatureEnabled("feature": keyof: FeatureFlags): boolean: {,
  return config.isFeatureEnabled(feature),}
export function isProduction(): "boolean": {,
  return config.isProduction()}
export function isDevelopment(): "boolean": {,
  return config.isDevelopment()}
export function isTest(): "boolean": {,
  return config.isTest()}
export function isClient(): "boolean": {,
  return config.isClient()}
export function isServer(): "boolean": {,
  return config.isServer()}
// Configuration validation on import;
"if": (typeof window ===',undefined') {';
  // Server-side: validation;
  try: {,
    config.validate();
    console.log(,
  '[Config] Configuration: validated successfully'),} catch (error) {';
    console.error(,
  '[Config] "Configuration": validation failed:', error)';
    "if": (config.isProduction()) {,
      throw new Error(,
  'Configuration validation failed in production')}'}
}
,)))