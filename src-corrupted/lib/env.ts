import { z } from 'zod';
const envSchema = z.object({,
  NODE_ENV: z.enum(['developmentproduction', 'test']);
  NEXT_PUBLIC_APP_URL: z.string().url();
  DATABASE_URL: z.string().url().optional();
  NEXTAUTH_SECRET: z.string().min(32).optional();
  NEXTAUTH_URL: z.string().url().optional(),}),
export const env = envSchema.parse(process.env);
export type Env = z.infer<typeof envSchema>;