import { toast as hotToast } from 'react-hot-toast'

type Variant = 'default' | 'destructive'

type AppToastArgs = {
  title: string
  description?: string
  variant?: Variant
}

export const toast = ({ title, description, variant = 'default' }: AppToastArgs) => {
  const message = description ? `${title}\n${description}` : title
  if (variant === 'destructive') {
    return hotToast.error(message)
  }
  return hotToast(message)
}

export function useToast() {
  const showToast = (message: string) => hotToast(message)
  return { showToast }
}