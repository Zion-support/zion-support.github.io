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
import { forwardRef } from 'react';
import './Button.css';
const Button = forwardRef((_a, ref) => {
    var { variant = 'primary', size = 'medium', loading = false, fullWidth = false, leftIcon, rightIcon, children, className = '', disabled } = _a, props = __rest(_a, ["variant", "size", "loading", "fullWidth", "leftIcon", "rightIcon", "children", "className", "disabled"]);
    const isDisabled = disabled || loading;
    return (_jsxs("button", Object.assign({ ref: ref, className: `btn btn--${variant} btn--${size} ${fullWidth ? 'btn--full-width' : ''} ${loading ? 'btn--loading' : ''} ${className}`, disabled: isDisabled }, props, { children: [loading && (_jsx("span", { className: 'btn__spinner', "aria-hidden": 'true', children: _jsx("svg", { className: 'btn__spinner-icon', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: _jsxs("circle", { cx: '12', cy: '12', r: '10', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeDasharray: '32', strokeDashoffset: '32', children: [_jsx("animate", { attributeName: 'stroke-dasharray', dur: '2s', values: '0 32;16 16;0 32;0 32', repeatCount: 'indefinite' }), _jsx("animate", { attributeName: 'stroke-dashoffset', dur: '2s', values: '0;-16;-32;-32', repeatCount: 'indefinite' })] }) }) })), leftIcon && !loading && (_jsx("span", { className: 'btn__icon btn__icon--left', "aria-hidden": 'true', children: leftIcon })), _jsx("span", { className: 'btn__content', children: children }), rightIcon && !loading && (_jsx("span", { className: 'btn__icon btn__icon--right', "aria-hidden": 'true', children: rightIcon }))] })));
});
Button.displayName = 'Button';
export default Button;
