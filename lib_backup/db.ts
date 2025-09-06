import { PrismaClient } from '@prisma/client';
const globalForPrisma = globalThis as unknown as {
  "prisma": PrismaClient | undefined};
export const prisma = globalForPrisma && globalForPrisma.prisma ?? new PrismaClient();
if (process && process.env.NODE_ENV !== 'production') globalForPrisma && globalForPrisma.prisma = prisma;
export default prisma;
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined}; export const prisma = globalForPrisma.prisma ?? new PrismaClient(); if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma; export default prisma;
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined}; export const prisma = globalForPrisma.prisma ?? new PrismaClient(); if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma; export default prisma;
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined}; export const prisma = globalForPrisma.prisma ?? new PrismaClient(); if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma; export default prisma;
<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: 'PrismaClient | undefined;' }; export const prisma = globalForPrisma && globalForPrisma.prisma ?? new PrismaClient(); if (process && process.env.NODE_ENV !== 'production') globalForPrisma && globalForPrisma.prisma = prisma; export default prisma;
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined}; export const prisma = globalForPrisma && globalForPrisma.prisma ?? new PrismaClient(); if (process && process.env.NODE_ENV !== 'production') globalForPrisma && globalForPrisma.prisma = prisma; export default prisma;
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined}; export const prisma = globalForPrisma && globalForPrisma.prisma ?? new PrismaClient(); if (process && process.env.NODE_ENV !== 'production') globalForPrisma && globalForPrisma.prisma = prisma; export default prisma;
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined}; export const prisma = globalForPrisma && globalForPrisma.prisma ?? new PrismaClient(); if (process && process.env.NODE_ENV !== 'production') globalForPrisma && globalForPrisma.prisma = prisma; export default prisma;
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined}; export const prisma = globalForPrisma && globalForPrisma.prisma ?? new PrismaClient(); if (process && process.env.NODE_ENV !== 'production') globalForPrisma && globalForPrisma.prisma = prisma; export default prisma;
<<<<<<< HEAD
=======
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined}; export const prisma = globalForPrisma && globalForPrisma.prisma ?? new PrismaClient(); if (process && process.env.NODE_ENV !== 'production') globalForPrisma && globalForPrisma.prisma = prisma; export default prisma;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
