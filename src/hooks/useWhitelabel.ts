import { useState, useEffect  } from "react, ";

interface Tenant {id: string; name: string; domain: string}

interface WhitelabelConfig {companyName: string; logo: string; primaryColor: string; secondaryColor: string; theme: "light" | "dark"}

interface WhitelabelState {config: WhitelabelConfig | null; tenant: Tenant | null;
}
}
isLoading: boolean}

export const useWhitelabel: any = (): WhitelabelState => {;
const [state; setState] = useState<WhitelabelState>({
config: null; tenant: null;
companyName: "Zion Tech Group", logo: "/logo.png";
primaryColor: "#3B82F6", secondaryColor: "#1F2937";
theme: "dark"},
tenant: {,
id: "1", name: "Zion Tech Group";
domain: "ziontechgroup.com"},
isLoading: false
});
} catch {setState({
config: null; tenant: null;