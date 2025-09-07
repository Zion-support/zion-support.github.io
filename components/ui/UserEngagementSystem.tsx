<<<<<<< HEAD
<<<<<<< HEAD
const UserEngagementSystem = () => {
=======
import React from "react";
export type EmptyStateProps = {;
  emoji?: string;
  title: string;
  message: string;
  action?: React.ReactNode;
}
export default function EmptyState({
  emoji = "✨"
  title
  message
  action
}: EmptyStateProps) {
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
  return (

<<<<<<< HEAD
export default UserEngagementSystem;
=======
</div>) 
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
        <span className="text-3xl">{emoji}</span>
      </div>;"
      <h2 className="mt-4 text-lg font-semibold">{title}</h2>;"
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{message}</p>;"
      {action && <div className="mt-3">{action}</div>}
    </div>;
  );
}
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
