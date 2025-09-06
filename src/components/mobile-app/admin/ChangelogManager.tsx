  platform: AppPlatform;
}

type ChangelogEntry = {
  id: string;
  version: string;
  date: string;
  changes: string;
};

  
  
    });
  };
  
  const handleRemoveEntry = (id: string) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };
  
  );
};
