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
import { forwardRef, useState } from 'react';
import './Input.css';
const Input = forwardRef((_a, ref) => {
    var { label, error, helperText, leftIcon, rightIcon, variant = 'default', size = 'medium', fullWidth = false, className = '', id } = _a, props = __rest(_a, ["label", "error", "helperText", "leftIcon", "rightIcon", "variant", "size", "fullWidth", "className", "id"]);
    const [isFocused, setIsFocused] = useState(false);
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const handleFocus = (e) => {
        var _a;
        setIsFocused(true);
        (_a = props.onFocus) === null || _a === void 0 ? void 0 : _a.call(props, e);
    };
    const handleBlur = (e) => {
        var _a;
        setIsFocused(false);
        (_a = props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props, e);
    };
    return (_jsxs("div", { className: `input-container ${fullWidth ? 'input-container--full-width' : ''}`, children: [label && (_jsxs("label", { htmlFor: inputId, className: 'input-label', children: [label, props.required && _jsx("span", { className: 'input-required', children: "*" })] })), _jsxs("div", { className: `input-wrapper input-wrapper--${variant} input-wrapper--${size} ${isFocused ? 'input-wrapper--focused' : ''} ${error ? 'input-wrapper--error' : ''} ${className}`, children: [leftIcon && (_jsx("span", { className: 'input-icon input-icon--left', "aria-hidden": 'true', children: leftIcon })), _jsx("input", Object.assign({ ref: ref, id: inputId, className: 'input', onFocus: handleFocus, onBlur: handleBlur }, props)), rightIcon && (_jsx("span", { className: 'input-icon input-icon--right', "aria-hidden": 'true', children: rightIcon }))] }), (error || helperText) && (_jsxs("div", { className: 'input-message', children: [error && (_jsx("span", { className: 'input-error', role: 'alert', children: error })), helperText && !error && (_jsx("span", { className: 'input-helper', children: helperText }))] }))] }));
});
Input.displayName = 'Input';
export default Input;
