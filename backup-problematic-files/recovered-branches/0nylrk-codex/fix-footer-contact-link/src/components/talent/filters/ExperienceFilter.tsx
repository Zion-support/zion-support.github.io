
      {expanded && (;
        <div className="mt-6">;
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;
            <span>{experienceRange[0]} years</span>;
            <span>{experienceRange[1]} years</span>;
          </div>;

            min={0}
            max={15}
            step={1}
            onValueChange={handleChange}

          />;
        </div>;
      )}
    </div>;

