type FloatingActionButtonProps = {}
  enabled?: boolean;
};

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ enabled = true }) => {}
  const [open, setOpen] = useState(false);
  if (!enabled) return null;
  return()
    <button;
      onClick={() => setOpen(!open)}
      aria-expanded={open}
      aria-label="Quick actions""""
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg bg-cyan-500 hover:bg-cyan-600 text-white"""
    >
      <Plus size={24}  />
    </button>
  )};

export default FloatingActionButton;"""