




  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}


        className="flex w-full items-center justify-between text-white font-medium"




      {expanded && (;

              <Checkbox

    </div>;
  );
export /**
 * AvailabilityFilter - Function description
 */
function AvailabilityFilter() {
  return (
    <div className="mb - 6 border - b border - zion - blue - light pb - 6">;
      <button;
        on_click={toggle_section}
        className="flex w - full items - center justify - between text - white font - medium";
      >;
        <span > Availability</span>;
        {expanded ? (
          <ChevronUp className="h - 4 w - 4 text - zion - slate - light" />) : (
          <ChevronDown className="h - 4 w - 4 text - zion - slate - light" />)}
      </button>;
      {expanded && (
        <div className="mt - 4 space - y-2">;
          {AVAILABILITY_OPTIONS.map ((option) => (
            <div key={option.id} className="flex items - center">;
              <Checkbox;
                id={`availability-${option.id}`}
                checked={selected_availability.includes (option.id)}
                onCheckedChange={() => toggle_availability (option.id)}
                className="border - zion - slate - light data-[state = checked]:bg - zion - purple data-[state = checked]:border - zion - purple";
              />;
              <label;
                html_for={`availability-${option.id}`}
                className="ml - 2 text - sm text - zion - slate - light cursor - pointer";
              >;
                {option.label}
              </label>;
            </div>))}
        </div>)}
    </div>);
}


  );
}
  )
}
;

