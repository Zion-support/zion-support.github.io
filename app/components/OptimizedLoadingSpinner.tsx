import { ArrowRight } from "lucide-react";

interface OptimizedLoadingSpinnerProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "dots" | "pulse" | "spinner" | "skeleton" | "bars";
  text?: string;
  className?: string;
  color?: "blue" | "gray" | "green" | "red" | "purple";
  fullScreen?: boolean;
}

const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps> = memo(
  ({
    size = "md",
    variant = "spinner",
    text = "Loading...",
    className = "",
    color = "blue",
    fullScreen = false,
  }) => {
    const sizeClasses = useMemo(
      () => ({
        xs: "h-3 w-3",
        sm: "h-4 w-4",
        md: "h-8 w-8",
        lg: "h-12 w-12",
        xl: "h-16 w-16",
      }),
      [],
    );

    const textSizeClasses = useMemo(
      () => ({
        xs: "text-xs",
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
        xl: "text-xl",
      }),
      [],
    );

    const colorClasses = useMemo(
      () => ({
        blue: "text-blue-500",
        gray: "text-gray-500",
        green: "text-green-500",
        red: "text-red-500",
        purple: "text-purple-500",
      }),
      [],
    );

    const renderSpinner = () => {
      switch (variant) {
        case "dots":
          return (
            <div className="flex space-x-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-pulse`}
                  style={{
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: "1s",
                  }}
                />
              ))}
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Custom Implementation;
              </h3>
              <p className="text-green-700">
                Tailored optimizedloadingspinner implementations for your specific requirements.</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                24/7 Support;
              </h3>
              <p className="text-purple-700">
                Round-the-clock support for all your optimizedloadingspinner needs.</p>
            </div>
          </div>
          <div className="mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started Today,
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
            OptimizedLoadingSpinner</h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional optimizedloadingspinner solutions tailored to your business needs.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Expert Solutions</h3>
              <p className="text-blue-700">
                Our team of experts delivers cutting-edge optimizedloadingspinner solutions.</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Custom Implementation</h3>
              <p className="text-green-700">
                Tailored optimizedloadingspinner implementations for your specific requirements.</p></div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                24/7 Support</h3>
              <p className="text-purple-700">
                Round-the-clock support for all your optimizedloadingspinner needs.</p></div></div>
          <div className="mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started Today</button></div></div></div></div>
)}
            </button>
          </div>
        </div>
      </div>
    </div>
)}
};
