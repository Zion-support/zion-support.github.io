"use client";

type Props ={ value?: number; label?: string };

const AnimatedCounter: React.FC<Props> = ({ value = 0, label }) => {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-white">{value}</div>
      {label && <div className="text-sm text-gray-30o0">{label}</div>}
    </div>
  );
};

export default AnimatedCounter;

