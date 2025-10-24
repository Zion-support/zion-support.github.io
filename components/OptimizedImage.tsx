import React from "react";
import { Image  } from "next/image
interface OptimizedImageProps {
src: string
alt: string
width?: number
height?: number
className?: string
  "data-testid"?: string
}
  [ke,y: "string,]: any"}
};
;
interface OptimizedImageProps {

src",alt
width = 800
height = 600 className=
  "data-testid": testId
  ...props 
}
const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
src",alt
width = 800
height = 600 className=
  "data-testid": testId
  ...props  }) => {
return (</OptimizedImageProps>
    <Imagesrc = {src}
      alt = {alt}
      width = {width}
      height = {height}
      className={className}
      data-testid = {testId}
      {...props } />)
  )
}
export interface OptimizedImageProps {
   className = '', children 
}
const OptimizedImage: React.FC<OptimizedImageProps> = ({  className = '', children  }) => {
  return (
    <div className={`optimizedimage ${className}`}>
      {children}
    </div>
  );
import React from "react";
src: string;
alt: string;
width?: number;
height?: number;
className?: string
  "data-testid"?: string;
}
  [ke,y: "string]: any"}
}
interface OptimizedImageProps {

src",alt;
width = 800;
height = 600
className=""
  "data-testid": testId;
  ...props);

}
const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
src",alt;
width = 800;
height = 600
className=""
  "data-testid": testId;
  ...props);
 }) => {;
return(</OptimizedImageProps>;
    <Imagesrc = {src}
      alt = {alt}
      width = {width}
      height = {height}
      className={className}
      data-testid = {testId});
      {...props} />);
  )}
export default OptimizedImage;</Image>
};

export default OptimizedImage;
