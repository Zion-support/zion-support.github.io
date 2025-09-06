Spinner.display_name = 'Spinner';
export default Spinner; import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib / utils';
export interface SpinnerProps extends React.SVGProps < SVGSVGElement> {
  size?: number | string;
}
const Spinner = React.forward_ref < SVGSVGElement, SpinnerProps>(
  ({ class_name, size = 24, ...props }, ref, ) => (
    <Loader2;
      ref = {ref, }
      {...props}
      class_name = {cn ('animate - spin', class_name), }
      width = {size, }
      height = {size, }
    />)),
Spinner.display_name = 'Spinner',
export default Spinner,
;