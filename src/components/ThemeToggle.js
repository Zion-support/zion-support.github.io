import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTheme } from '../contexts/ThemeContext';
import './ThemeToggle.css';
const ThemeToggle = () => {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const handleThemeChange = () => {
        const newTheme = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light';
        setTheme(newTheme);
    };
    const getIcon = () => {
        if (theme === 'system') {
            return '🖥️';
        }
        return resolvedTheme === 'dark' ? '🌙' : '☀️';
    };
    const getLabel = () => {
        if (theme === 'system') {
            return 'System';
        }
        return resolvedTheme === 'dark' ? 'Dark' : 'Light';
    };
    return (_jsxs("button", { className: 'theme-toggle', onClick: handleThemeChange, "aria-label": `Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} theme`, title: `Current: ${getLabel()} theme`, children: [_jsx("span", { className: 'theme-toggle__icon', role: 'img', "aria-hidden": 'true', children: getIcon() }), _jsx("span", { className: 'theme-toggle__label', children: getLabel() })] }));
};
export default ThemeToggle;
