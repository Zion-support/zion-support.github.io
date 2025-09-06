import { PrismaClient } from '@prisma/client';
const globalForPrisma = globalThis as unknown as {
  "prisma": PrismaClient | undefined};
export const prisma = globalForPrisma && globalForPrisma.prisma ?? new PrismaClient();
if (process && process.env.NODE_ENV !== 'production') globalForPrisma && globalForPrisma.prisma = prisma;
export default prisma;
<<<<<<< HEAD
<<<<<<< HEAD
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: 'PrismaClient | undefined;' }; export const prisma = globalForPrisma.prisma ?? new PrismaClient(); if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma; export default prisma;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined}; export const prisma = globalForPrisma.prisma ?? new PrismaClient(); if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma; export default prisma;
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined}; export const prisma = globalForPrisma.prisma ?? new PrismaClient(); if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma; export default prisma;
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined}; export const prisma = globalForPrisma.prisma ?? new PrismaClient(); if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma; export default prisma;

<<<<<<< HEAD
=======
=======
=======
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined}; export const prisma = globalForPrisma.prisma ?? new PrismaClient(); if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma; export default prisma;
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined}; export const prisma = globalForPrisma.prisma ?? new PrismaClient(); if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma; export default prisma;
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined}; export const prisma = globalForPrisma.prisma ?? new PrismaClient(); if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma; export default prisma;
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined}; export const prisma = globalForPrisma.prisma ?? new PrismaClient(); if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma; export default prisma;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: 'PrismaClient | undefined;' }; export const prisma = globalForPrisma && globalForPrisma.prisma ?? new PrismaClient(); if (process && process.env.NODE_ENV !== 'production') globalForPrisma && globalForPrisma.prisma = prisma; export default prisma;
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined}; export const prisma = globalForPrisma && globalForPrisma.prisma ?? new PrismaClient(); if (process && process.env.NODE_ENV !== 'production') globalForPrisma && globalForPrisma.prisma = prisma; export default prisma;
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined}; export const prisma = globalForPrisma && globalForPrisma.prisma ?? new PrismaClient(); if (process && process.env.NODE_ENV !== 'production') globalForPrisma && globalForPrisma.prisma = prisma; export default prisma;
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined}; export const prisma = globalForPrisma && globalForPrisma.prisma ?? new PrismaClient(); if (process && process.env.NODE_ENV !== 'production') globalForPrisma && globalForPrisma.prisma = prisma; export default prisma;
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined}; export const prisma = globalForPrisma && globalForPrisma.prisma ?? new PrismaClient(); if (process && process.env.NODE_ENV !== 'production') globalForPrisma && globalForPrisma.prisma = prisma; export default prisma;
<<<<<<< HEAD
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined}; export const prisma = globalForPrisma && globalForPrisma.prisma ?? new PrismaClient(); if (process && process.env.NODE_ENV !== 'production') globalForPrisma && globalForPrisma.prisma = prisma; export default prisma;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/lib_backup/db.ts
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined}; export const prisma = globalForPrisma && globalForPrisma.prisma ?? new PrismaClient(); if (process && process.env.NODE_ENV !== 'production') globalForPrisma && globalForPrisma.prisma = prisma; export default prisma;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined}; export const prisma = globalForPrisma.prisma ?? new PrismaClient(); if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma; export default prisma;
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined}; export const prisma = globalForPrisma.prisma ?? new PrismaClient(); if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma; export default prisma;
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined}; export const prisma = globalForPrisma.prisma ?? new PrismaClient(); if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma; export default prisma;
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined}; export const prisma = globalForPrisma.prisma ?? new PrismaClient(); if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma; export default prisma;
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined}; export const prisma = globalForPrisma.prisma ?? new PrismaClient(); if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma; export default prisma;
import { PrismaClient } from '@prisma/client'; const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined}; export const prisma = globalForPrisma.prisma ?? new PrismaClient(); if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma; export default prisma;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
