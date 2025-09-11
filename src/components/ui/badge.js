var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
const baseClass = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium';
const variantClasses = {
    default: 'bg-zion-purple text-white',
    outline: 'border border-current text-zion-slate-light',
    secondary: 'bg-zion-blue-light/20 text-zion-slate-light',
    destructive: 'bg-red-600 text-white',
};
export function Badge(_a) {
    var { variant = 'default', className = '', children } = _a, rest = __rest(_a, ["variant", "className", "children"]);
    const classes = `${baseClass} ${variantClasses[variant]} ${className}`.trim();
    return (_jsx("span", Object.assign({ className: classes }, rest, { children: children })));
}
export default Badge;
