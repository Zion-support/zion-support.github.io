 export default function ThemeToggle () : JSX.Element {
  const {
  mode, toggleTheme 
}= useTheme ();
return (<Button aria-label="Toggle theme" onClick= {
  toggleTheme 
}variant="ghost" size="icon" > {
  mode === "dark" ? (<Sun className="h-5 w-5" /> h-5 w-5"/>) 
}<span className=" sr-only" >Toggle theme</span> </Button>) 
}