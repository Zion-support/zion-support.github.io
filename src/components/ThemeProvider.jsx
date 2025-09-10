const ThemeContext = React.createContext({theme: "dark",
  setTheme: () => null,}
    );

export const ThemeProvider = (props: any) => {
  const [theme, setTheme] = React.useState("dark");
