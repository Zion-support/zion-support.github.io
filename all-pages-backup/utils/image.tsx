<<<<<<< HEAD:all-pages-backup/utils/image.tsx
src: string,
{alt: string}
interface ImageProps {}
  src: string,
  alt: string
<<<<<<< HEAD:all-pages-backup/utils/image.tsx
_quality?: number,
  src: string,
  alt: string
<<<<<<< HEAD:all-pages-backup/utils/image.tsx
_quality?: number,
  src: string,
  alt: string
<<<<<<< HEAD:all-pages-backup/utils/image.tsx
{onError?: () => void}
{}
export const Image: React.FC<ImageProps>= ({}
export const Image: React.FC<ImageProps> = ({};
src
export const Image: React.FC<ImageProps> = ({,
src
<<<<<<< HEAD:all-pages-backup/utils/image.tsx
style,
onLoad,
onError,}
{...props}
{}) => {}
const [, setIsLoaded] = useState(false);
const [hasError, setHasError] = useState(false);
const handleLoad = useCallback(() => {};
setIsLoaded(true);
{if (onLoad) onLoad()}
{}, [onLoad])
const handleError = useCallback(() => {};
setHasError(true);
{if (onError) onError()}
{}, [onError])
const imageStyle: React.CSSProperties = {};
...style
...(fill && {}
position: position,
  top: 0,
{left: 0,}
const imageStyle: React.CSSProperties = {};
...style
...(fill && {}
position: position,
  top: 0,
  left: 0,
  width: width,
  height: '100%'
{objectFit: 'cover'}
{})
{}
if (hasError) {</ImageProps>;
return (</ImageProps>}
if (hasError) {}
return ()
{    <div}
if (hasError) {}
{return(<div}
<<<<<<< HEAD:all-pages-backup/utils/image.tsx
{}
export const,
Image: React.FC<ImageProps>= ({/* TODO: Fix JSX expression */})</div>
{}) => {/* TODO: Fix JSX expression */}
{}, [onLoad])
const handleError = useCallback(() => {/* TODO: Fix JSX expression */};
{}, [onError])
const,
  imageStyle: React.CSSProperties = {/* TODO: Fix JSX expression */}
{})
{}
<<<<<<< HEAD:all-pages-backup/utils/image.tsx
{}
return(<img
return ()
<<<<<<< HEAD:all-pages-backup/utils/image.tsx
>)</img>;
{}</img>;
