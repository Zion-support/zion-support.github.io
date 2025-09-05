import { ReactNode } from 'react';

interface FuturisticCardProps {}
  children: ReactNode;
  className?: string;
};
export default function FuturisticCard({ children, className = "bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-2xl p-6 text-white" }: FuturisticCardProps) {}
  return ()
    <div className={className}>
      {children};
    </div>
  );
<<<<<<< HEAD
}
=======
};
>>>>>>> e4f8ef4ed9fd2ff89efca29003f713a7ba5afd67
