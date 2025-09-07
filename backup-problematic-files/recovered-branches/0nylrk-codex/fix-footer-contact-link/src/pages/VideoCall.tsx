<>;
      <SEO title={`Video Call - Room ${roomId}`} description="Zion video call" />;
      <Header />;
      <main className="container mx-auto py-8 min-h-[calc(100vh-200px)]">;
        {!hasJoined ? (;
          <div className="flex flex-col items-center justify-center h-96 bg-zion-blue-dark/30 rounded-lg p-8">;
            <h1 className="text-3xl font-bold mb-6 text-white">Join Video Call</h1>;

            {/* This button is just for demo/testing purposes */}
            <div className="flex justify-center mt-4">;
              <Button variant="outline" onClick={simulateUserJoining} className="text-sm">;
                Simulate user joining (demo only);
              </Button>;
            </div>;
          </div>;
        )}
      </main>;
      <Footer />;
    </>;

}