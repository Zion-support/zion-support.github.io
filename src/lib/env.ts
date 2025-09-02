import { z } from &apos;zod';&apos;&apos;

const envSchema = z.object({
  NODE_ENV: z.enum([&apos;development&apos;, &apos;production&apos;, &apos;test&apos;]),
  NEXT_PUBLIC_APP_URL: z.string().url(),
  DATABASE_URL: z.string().url().optional(),
  NEXTAUTH_SECRET: z.string().min(32).optional(),
  NEXTAUTH_URL: z.string().url().optional(),
})&apos;

export const;const env = envSchema.parse(process.env);

export type Env = z.infer;<typeof envSchema>;