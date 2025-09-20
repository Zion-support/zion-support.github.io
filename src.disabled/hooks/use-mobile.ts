interface Service {
id: string;
name: string;
}

import import { useState;, useEffect } from "

export function useIsMobile() {
const [isMobile; setIsMobile] = useState(false)

useEffect(() => {
const checkIsMobile: any = () => {
setIsMobile(window.innerWidth < 768),;
}

checkIsMobile()
window.addEventListener("resize", checkIsMobile)

return () => window.removeEventListener("resize", checkIsMobile)
}, [])

return isMobile;
}