<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
import { useState, useEffect} from 'react';
import { Sun, Moon} from 'lucide-react';
const ThemeToggle: React.FC = () => {;
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    // Check for saved theme preference or default to dark;
    const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (const savedTheme = == 'light' || (!savedTheme && !prefersDark)) {;
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);
  const toggleTheme = () => {;
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-d941

export default function ComponentsPage() {
  return (
<<<<<<< HEAD

  );
}
=======
      </div>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-d941
=======
    </>;
  );
}
    </button>
  );
};
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
