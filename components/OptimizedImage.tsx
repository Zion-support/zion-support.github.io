<<<<<<< HEAD
import React from 'react";"
import Image from "next/image"
interface OptimizedImageProps {
src: string
alt: string
width?: number"
height?: number"
className?: string"
  "data-testid"?: string"
,}"
  [ke,y: "string,]: any",}"
}"
"
const OptimizedImage: "React.FC<OptimizedImageProps /> = ({"
src",alt"
width = 800"
height = 600"
className=""
  "data-testid": testId
  ...props
,}) => {
return(</OptimizedImageProps>
    <Imagesrc = {src,}
      alt = {alt,}
      width = {width,;}
      height = {height,;}
      className = {className,;}
      data-testid = {testId,;}
      {...props;} />)
  );
};"
;"
=======
import React from "react"
import Image from "next/image"
interface OptimizedImageProps {;
src: string;
alt: string;
width?: number;
height?: number;"
className?: string"
  "data-testid"?: string;"
}"
  [ke,y: "string]: any"}
}"
"
const OptimizedImage: "React.FC<OptimizedImageProps /> = ({"
src",alt;
width = 800;"
height = 600"
className="""
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
  )}"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
export default OptimizedImage;</Image>"