<<<<<<< HEAD
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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
const Select = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (_jsxs("div", { className: "relative", children: [_jsx("select", Object.assign({ ref: ref, className: cn('flex h-10 w-full appearance-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50', className) }, props, { children: children })), _jsx(ChevronDown, { className: "absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-50 pointer-events-none" })] }));
});
Select.displayName = 'Select';
const SelectValue = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (_jsx("option", Object.assign({ ref: ref, className: cn('', className) }, props, { children: children })));
});
SelectValue.displayName = 'SelectValue';
const SelectTrigger = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (_jsxs("button", Object.assign({ ref: ref, className: cn('flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50', className) }, props, { children: [children, _jsx(ChevronDown, { className: "h-4 w-4 opacity-50" })] })));
});
SelectTrigger.displayName = 'SelectTrigger';
const SelectContent = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (_jsx("div", Object.assign({ ref: ref, className: cn('', className) }, props, { children: children })));
});
SelectContent.displayName = 'SelectContent';
const SelectItem = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (_jsx("div", Object.assign({ ref: ref, className: cn('', className) }, props, { children: children })));
});
SelectItem.displayName = 'SelectItem';
export { Select, SelectValue, SelectTrigger, SelectContent, SelectItem };
=======
import React from 'react';
export function Select({ children, className = '', value, onValueChange }) {
    return (<select className={`${baseClasses} ${className}`} value={value} onChange={onChange} disabled={disabled}>
      {children}
    </select>);
}
export function SelectItem({ children, value }) {
    return (<div className={`
        flex h-10 w-full items-center justify-between rounded-md border 
        border-zion-blue-light/30 bg-zion-blue-dark/50 px-3 py-2 text-sm 
        text-white placeholder:text-zion-slate-light/50
        focus:outline-none focus:ring-2 focus:ring-zion-cyan 
        focus:border-transparent transition-colors cursor-pointer
        ${className}
      `} {...props}>
      {children}
    </div>);
}
export function SelectValue({ placeholder }) {
    return <span className="text-sm">{placeholder || 'Select an option'}</span>;
}
export function SelectContent({ children, className = '' }) {
    return (<div className={`
      absolute top-full left-0 right-0 z-50 mt-1 rounded-md border 
      border-zion-blue-light/30 bg-zion-blue-dark/90 backdrop-blur-sm 
      shadow-lg ${className}
    `}>
      {children}
    </div>);
}
export function SelectItem({ children, className = '', value, ...props }) {
    return (<div className={`
        relative flex w-full cursor-pointer select-none items-center 
        rounded-sm px-3 py-2 text-sm text-white outline-none 
        hover:bg-zion-blue/20 focus:bg-zion-blue/20 
        focus:text-white transition-colors
        ${className}
      `} data-value={value} {...props}>
      {children}
    </div>);
}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
