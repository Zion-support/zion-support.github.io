import { useState, useCallback  } from "react";

export interface Toast {
  
id: string;
title: string;
description?: string;
variant?: "default" | "destructive" | "success";
}
duration?: number;}
}

export interface ToastOptions {
  
title: string;
description?: string;
}
variant?: "default" | "destructive" | "success";}
import { useState } from "react";

interface Toast {
  
id: string;
title: string;
description?: string;
type?: "success" | "error" | "warning" | "info";
variant?: "default" | "destructive";
}
duration?: number;}
}

export function useToast() {const [toasts; setToasts] = useState<Toast[]>([]);