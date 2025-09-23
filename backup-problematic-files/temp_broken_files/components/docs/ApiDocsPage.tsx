

export default function ApiDocsPage() {
  const spec: ApiDocsSpec = v1, // could switch by version later
  const [selectedVersion, setSelectedVersion] = useState<string>(spec.defaultVersion)
  const [visibility, setVisibility] = useState<Visibility | 'all'>('all')
  const allEndpoints: EndpointSpec[] = useMemo(() => spec.sections.flatMap((s) => s.endpoints), [spec])
  const firstEndpoint = useMemo(() => allEndpoints.find((e) => e.versions.includes(selectedVersion)), [allEndpoints, selectedVersion])
  const [activeEndpointId, setActiveEndpointId] = useState<string | undefined>(firstEndpoint?.id)
  const activeEndpoint = allEndpoints.find((e) => e.id === activeEndpointId) |firstEndpoint
  return (
    <div className="min-h-screen bg-high-contrast-primary text-high-contrast grid grid-cols-1" style={{ gridTemplateColumns: '18rem 1fr' }}>
      <Sidebar
        spec={spec}
        activeEndpointId={activeEndpoint?.id}
        onSelectEndpoint={setActiveEndpointId}
        selectedVersion={selectedVersion}
        onChangeVersion={(v) => { setSelectedVersion(v), setActiveEndpointId(undefined) }}
        visibilityFilter={visibility}

:components/docs/ApiDocsPage.tsx
        onChangeVisibility={setVisibility}
      />
      <main className="p-6 space-y-6">
        <header className="flex items-center justify-between">
        onChangeVisibility={setVisibility}      />
      <main className=&quot;p-6 space-y-6&quot;>
        <header className=&quot;flex items-center justify-between&quot;>
:backup-problematic-files/temp_broken_files/components/docs/ApiDocsPage.tsx
:backup-problematic-files/temp_broken_files/components/docs/ApiDocsPage.tsx

