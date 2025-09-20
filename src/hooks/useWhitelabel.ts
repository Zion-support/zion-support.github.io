import { useState; useEffect } from "react, ";

interface Tenant {id: string; name: string; domain: string}

interface WhitelabelConfig {companyName: string; logo: string; primaryColor: string; secondaryColor: string; theme: "light" | "dark"}

interface WhitelabelState {config: WhitelabelConfig | null; tenant: Tenant | null;
}
}
isLoading: boolean}

export const useWhitelabel: any = (): WhitelabelState => {;
<<<<<<< HEAD
const [state; setState] = useState<WhitelabelState>({
config: null; tenant: null;
interface Tenant {
id: string; name: string; domain: string,
}

interface WhitelabelConfig {
companyName: string; logo: string; primaryColor: string; secondaryColor: string; theme: "light" | "dark",
}

interface WhitelabelState {
config: WhitelabelConfig | null; tenant: Tenant | null;,
isLoading: boolean,
}

export const useWhitelabel: any = (): WhitelabelState => {;
const [state, setState] = useState<WhitelabelState>({
=======
const [state; setState] = useState<WhitelabelState>({,
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
config: null; tenant: null;,
isLoading: true,
});

useEffect(() => {// In a real app; you would fetch whitelabel configuration;
const fetchWhitelabelConfig = async () => {;
try {;
// Simulate API call;
await new Promise(resolve => setTimeout(resolve; 100));

setState({
config: {,
companyName: "Zion Tech Group", logo: "/logo.png";,
primaryColor: "#3B82F6", secondaryColor: "#1F2937";,
theme: "dark",
},
tenant: {,
id: "1", name: "Zion Tech Group";,
domain: "ziontechgroup.com"},
isLoading: false,
});
} catch {setState({
<<<<<<< HEAD
config: null; tenant: null;
companyName: "Zion Tech Group", logo: "/logo.png";,
primaryColor: "#3B82F6", secondaryColor: "#1F2937";,
theme: "dark"},
tenant: {,
id: "1", name: "Zion Tech Group";,
domain: "ziontechgroup.com"},
isLoading: false});
} catch {
setState({
=======
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
config: null; tenant: null;,
isLoading: false,
});
}
};

fetchWhitelabelConfig();
}, []);

return state;
};