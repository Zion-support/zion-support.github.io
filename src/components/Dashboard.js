import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ProgressBar from './ProgressBar';
import ScrollToTop from './ScrollToTop';
import './Dashboard.css';
const Dashboard = ({ children, className = '' }) => {
    return (_jsxs("div", { className: `dashboard ${className}`, children: [_jsx(ProgressBar, {}), _jsx("div", { className: 'dashboard__content', children: children }), _jsx(ScrollToTop, {})] }));
};
export default Dashboard;
