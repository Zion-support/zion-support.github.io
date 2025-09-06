
export const useToast = useToastHook;

// Base toast function that delegates to the implementation from `useToastHook`.
function baseToast(props: ToastOptions) {
  const { toast } = useToastHook(),
  toast(props)
}
// Convenience helpers mirroring common toast variants.
baseToast.title = (title: string) => {
  baseToast({ title })

};
