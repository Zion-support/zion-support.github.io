
  return (
    <div className="min - h-screen bg - high - contrast - primary text - high - contrast grid grid - cols - 1" style={{ gridTemplateColumns: '18rem 1fr' }}>;
      <Sidebar;
        spec={spec}
        activeEndpointId={active_endpoint?.id}
        onSelectEndpoint={setActiveEndpointId}
}