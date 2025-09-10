 const _useToast = () => { const _successToast = (message: string) => { toast.success(message)}; const _errorToast = (message: string) => { toast.error(message)}; return { successToast, errorToast }})

}export default ComponentName