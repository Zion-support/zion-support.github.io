import React from "react";

import { cn } from "@/lib/utils";
interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {}

  className?: string;
  children?: React.ReactNode;
}

  return (
    <ul className={cn ("space - y-1", class_name)} {...props}>;
      {children}
    </ul>
  );
}



=======
  return ("
    <ul className={cn ("space - y-1", class_name)} {...props}>;

    </ul>);
}
      {children}
>>>>>>> origin/cursor/delete-old-data-records-6bba
