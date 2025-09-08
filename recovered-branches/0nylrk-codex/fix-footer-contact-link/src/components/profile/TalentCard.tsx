

      onViewProfile(talent && talent.id);
    }
  };

  const handleRequestHire = (e: React && React.MouseEvent) => {;
    e && e.preventDefault();
    e && e.stopPropagation(),;
    if (onRequestHire) {;
      onRequestHire(talent);
    }

  };

  // Extract skills - limit to 5 for display;
  const skills = talent && talent.skills?.slice(0, 5) || [];



          <div className="relative mr-4">;
            <div className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">;
              {talent && talent.profile_picture_url ? (;
                <img
                  src={talent && talent.profile_picture_url} 
                  alt={talent && talent.full_name} 
                  className="w-full h-full object-cover" 
                />;
              ) : (;
                <div className="w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold">;
                  {talent && talent.full_name?.charAt(0) || "T"}
                </div>;






                className="p-1 h-auto text-zion-slate-light hover:text-zion-cyan"
          </div>;

          <div className="flex items-center gap-2">;
            {isAuthenticated && (;
              <Button
                size="sm"
                variant="secondary"
                onClick={handleRequestHire}
                className="bg-zion-purple hover:bg-zion-purple-light text-white">;
                </span>;

