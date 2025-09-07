try {;
        const { data, error } = await supabase;
          .from("talent_profiles");
          .select("*");
          .eq("id", profileId);

      />;
      <AppHeader />;
      <div className="container mx-auto px-4 py-8">;
        <div className="grid grid-cols-12 gap-6">;
          {/* Main Content Area */}
          <div className="col-span-12 lg:col-span-8">;
            {/* Profile Header */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <div className="flex items-start">;
                {/* Avatar */}
                <div className="relative mr-4">;
                  <Avatar className="w-24 h-24">;

                {/* Main Info */}
                <div className="flex-1">;
                  <div className="flex justify-between items-start">;
                    <div>;

            {/* Portfolio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <h2 className="text-xl font-bold text-white mb-3">Portfolio</h2>;
              <div className="space-y-3">;

                      <LinkIcon className="h-4 w-4 mr-2" />;
                      {link}
                    </a>;
                  ));

            {/* Social Links */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <h2 className="text-xl font-bold text-white mb-3">Connect</h2>;
              <div className="flex space-x-4">;

          </div>;
        </div>;
      </div>;
      <Footer />;

}