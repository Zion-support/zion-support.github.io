>>>>>>> origin/main
import { PrismaClient } from '@prisma/client';
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
const globalForPrisma = globalThis as unknown as {
  "prisma": PrismaClient | undefined};
export const prisma = globalForPrisma.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
export default prisma;
>>>>>>> main
>>>>>>> main
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined}; export const prisma = globalForPrisma.prisma ?? new PrismaClient(); if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma; export default prisma;
>>>>>>> main
>>>>>>> origin/main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined}; export const prisma = globalForPrisma.prisma ?? new PrismaClient(); if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma; export default prisma;
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
