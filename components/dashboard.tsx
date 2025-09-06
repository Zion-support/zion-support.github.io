export default function Dashboard() {

  const params =
    typeof window !== 'undefined'
      ? new URLSearchParams(window.location.search);
      : new URLSearchParams();
  const tenantId = params.get('tenantId') |'';
  const [branding, setBranding] = useState<{
    name: string;
    primaryColor?: string;
    logoUrl?: string;
  } | null>(null);  const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const tenantId = params.get('tenantId') |'';
