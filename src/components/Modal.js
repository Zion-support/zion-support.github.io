import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useClickOutside } from '../hooks/useClickOutside';
import { useKeyPress } from '../hooks/useKeyPress';
import './Modal.css';
const Modal = ({ isOpen, onClose, title, children, size = 'medium', closeOnOverlayClick = true, closeOnEscape = true, className = '', }) => {
    const modalRef = useClickOutside(() => {
        if (closeOnOverlayClick) {
            onClose();
        }
    });
    useKeyPress('Escape', () => {
        if (closeOnEscape) {
            onClose();
        }
    });
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);
    if (!isOpen)
        return null;
    return (_jsx("div", { className: 'modal-overlay', role: 'dialog', "aria-modal": 'true', "aria-labelledby": title ? 'modal-title' : undefined, children: _jsxs("div", { className: `modal modal--${size} ${className}`, ref: modalRef, children: [_jsxs("div", { className: 'modal__header', children: [title && (_jsx("h2", { id: 'modal-title', className: 'modal__title', children: title })), _jsx("button", { className: 'modal__close', onClick: onClose, "aria-label": 'Close modal', type: 'button', children: "\u00D7" })] }), _jsx("div", { className: 'modal__content', children: children })] }) }));
};
export default Modal;
