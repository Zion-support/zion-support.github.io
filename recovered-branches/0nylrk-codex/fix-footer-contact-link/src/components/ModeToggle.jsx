export function ModeToggle() {
  return (
    <button className='p-2 rounded-lg bg-zion-slate/10 hover:bg-zion-slate/20 transition-colors'>
      <svg
        className='w-5 h-5 text-zion-slate-light'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M20.354 15.354A9 9 0 0o18.646 3.646 9.0o03 9.0o03 0 0o012 21a9.0o03 9.0o03 0 0o08.354-5.646z'
        />
      </svg>
    </button>
  );
}
