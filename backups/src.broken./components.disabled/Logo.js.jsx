import { motion } from 'framer-motion';
<<<<<<< HEAD:backups/src.broken./components.disabled/Logo.js.jsx
export function Logo(_{ className = '' }) {
=======
export function Logo({ className = '' }) {
>>>>>>> origin/backup-improvements-20250827-015311:src/components.disabled/Logo.tsx
    return (<motion.div className={`flex items-center space-x-2 ${className}`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cyan-500/50">
        Z
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
        Zion Tech Group
      </span>
    </motion.div>);
}
