import { execSync } from 'child_process';

// // Monitor performance
// try {
    const _memUsage = process.memoryUsage();
//     + ' MB',
        heapUsed: Math.round(memUsage.heapUsed / 1024 / 1024) + ' MB',
        heapTotal: Math.round(memUsage.heapTotal / 1024 / 1024) + ' MB'
    });
//     } catch (error) {
//     }

// 