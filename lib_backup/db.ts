import { PrismaClient } from '@prisma/client';
const globalForPrisma = globalThis as unknown as {
  "prisma": PrismaClient | undefined};
export const prisma = globalForPrisma && globalForPrisma.prisma ?? new PrismaClient();
if (process && process.env.NODE_ENV !== 'production') globalForPrisma && globalForPrisma.prisma = prisma;
export default prisma;
<<<<<<< HEAD
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: 'PrismaClient | undefined;' }; export const prisma = globalForPrisma.prisma ?? new PrismaClient(); if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma; export default prisma;
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined}; export const prisma = globalForPrisma.prisma ?? new PrismaClient(); if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma; export default prisma;
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined}; export const prisma = globalForPrisma.prisma ?? new PrismaClient(); if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma; export default prisma;
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined}; export const prisma = globalForPrisma.prisma ?? new PrismaClient(); if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma; export default prisma;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: 'PrismaClient | undefined;' }; export const prisma = globalForPrisma && globalForPrisma.prisma ?? new PrismaClient(); if (process && process.env.NODE_ENV !== 'production') globalForPrisma && globalForPrisma.prisma = prisma; export default prisma;
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined}; export const prisma = globalForPrisma && globalForPrisma.prisma ?? new PrismaClient(); if (process && process.env.NODE_ENV !== 'production') globalForPrisma && globalForPrisma.prisma = prisma; export default prisma;
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined}; export const prisma = globalForPrisma && globalForPrisma.prisma ?? new PrismaClient(); if (process && process.env.NODE_ENV !== 'production') globalForPrisma && globalForPrisma.prisma = prisma; export default prisma;
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined}; export const prisma = globalForPrisma && globalForPrisma.prisma ?? new PrismaClient(); if (process && process.env.NODE_ENV !== 'production') globalForPrisma && globalForPrisma.prisma = prisma; export default prisma;
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined}; export const prisma = globalForPrisma && globalForPrisma.prisma ?? new PrismaClient(); if (process && process.env.NODE_ENV !== 'production') globalForPrisma && globalForPrisma.prisma = prisma; export default prisma;
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined}; export const prisma = globalForPrisma && globalForPrisma.prisma ?? new PrismaClient(); if (process && process.env.NODE_ENV !== 'production') globalForPrisma && globalForPrisma.prisma = prisma; export default prisma;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/lib_backup/db.ts
