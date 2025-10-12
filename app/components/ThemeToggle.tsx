'use client';
import { use State, use Effect} from 'react';
import { Sun, Moon} from 'lucide-react';

const Theme Toggle: React.F C = () => {
  const [is Dark, set Is Dark] = use State(true);
  use Effect(() => {
    // Check for saved theme preference or default to dark
    const saved Theme = local Storage.get Item('theme');
    const prefers Dark = window.match Media('(prefers-color-scheme: dark)').matches;
    if (const saved Theme = == 'light' || (!saved Theme && !prefers Dark)) {
      set Is Dark(false);
      document.document Element.class List.remove('dark');
    } else {
      set Is Dark(true);
      document.document Element.class List.add('dark');
    }
  }, []);

  const toggle Theme = () => {
    const new Theme = !is Dark;
    set Is Dark(new Theme);

    if (new Theme) {
      document.document Element.class List.add('dark');
      local Storage.set Item('theme', 'dark');
    } else {
      document.document Element.class List.remove('dark');
      local Storage.set Item('theme', 'light');
    }
  };

  return (
    <b utton
      const on Click = {toggle Theme}
      class Name="p-2 r ounded-lg bg-slate-700/50 hover:bg-slate-700 text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
      aria-label="{`Switch" to ${is Dark ? 'light' : 'dark'} mode`}
     />
      {is Dark ? (
        <S un class Name="w-5 h-5" />
      ) : (
        <M oon class Name="w-5 h-5" />
      )}
    </b utton>
  );
};

export default Theme Toggle;
