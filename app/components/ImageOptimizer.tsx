export default function ImageOptimizer({
  src,
  alt,
  className = '',
  lazy = true,
      style={{
        backgroundImage: placeholder ? `url(${placeholder})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
