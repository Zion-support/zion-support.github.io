<<<<<<< HEAD
=======
import React from "react";
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

import React from "react";
export default function EnhancedCard({
<<<<<<< HEAD
  children
  className = ""
}: {
=======
  children,
  className = "",
}: {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  children: React.ReactNode;
  className?: string;
}) {

  return (
    <div className={["card-base p-4", className].join(" ")}>{children}</div>
  );
  return (
    <div className={["card-base p-4", className].join(" ")}>{children}</div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
