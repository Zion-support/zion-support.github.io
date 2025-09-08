


export const env = envSchema.parse(process.env);
;
export type Env = z.infer<typeof envSchema>;








