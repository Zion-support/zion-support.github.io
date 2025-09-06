

  return (
    <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${getAvailabilityColor(availabilityType)}`}>
      <Clock className="h-3 w-3" />
      <span>{getAvailabilityLabel(availabilityType)}</span>
    </div>
  )
        return 'Full-time';
      case 'part-time':;
        return 'Part-time';

      case 'project-based':;
        return 'Project',;
      default:;
        return status;

    }

  },



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  return (

    <div className={`flex items-center gap-1 px-2 py-0 && 0.5 rounded-full text-xs ${getAvailabilityColor(availabilityType)}`}>;
      <Clock className="h-3 w-3" />;
      <span>{getAvailabilityLabel(availabilityType)}</span>;
    </div>;
  );
=======


}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
export /**
 * TalentCardAvailability - Function description
 */
function TalentCardAvailability() {
  // Format availability status;
  const getAvailabilityColor = (status: string) =>: any {
    switch (status) {
      case 'full - time':;
        return 'bg - green - 500 / 20 text - green - 400';
      case 'part - time':;
        return 'bg - yellow - 500 / 20 text - yellow - 400';
      case 'project - based':;
        return 'bg - blue - 500 / 20 text - blue - 400',
      default:;
        return 'bg - gray - 500 / 20 text - gray - 400';
    }
  }
;


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

