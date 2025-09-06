interface TalentCardAvailabilityProps {
  availability_type: string;
}

export /**
 * TalentCardAvailability - Function description
 */
function TalentCardAvailability() {
  // Format availability status;
  const getAvailabilityColor = (status: string) =>: any {    switch (status) {
      case 'full - time':;
        return 'bg - green - 500 / 20 text - green - 400';
      case 'part - time':;
        return 'bg - yellow - 500 / 20 text - yellow - 400';
      case 'project - based':;
        return 'bg - blue - 500 / 20 text - blue - 400',
      default:;
        return 'bg - gray - 500 / 20 text - gray - 400';

    }
  } return 'bg - gray - 500 / 20 text - gray - 400';

        return 'bg-blue-500/20 text-blue-400',;
      default:;
        return 'bg-gray-500/20 text-gray-400';
    };
  }; return 'bg-gray-500/20 text-gray-400'
    }
  }
    switch (status) {
      case 'full-time':
        return 'Full-time'
      case 'part-time':
        return 'Part-time'
      case 'project-based':
        return 'Project'
      default:
        return status
      case 'project-based':;
        return 'bg-blue-500/20 text-blue-400',;
      default:;
        return 'bg-gray-500/20 text-gray-400';
    }
    }
  };

  const getAvailabilityLabel = (status: string,) => {;


    >;
      <Clock className='h-3 w-3' />;
      <span>{getAvailabilityLabel(availabilityType)}</span>;
    </div>;
  );
}
  const getAvailabilityLabel = (status: string, ) =>: any {
    switch (status) {
      case 'full - time':;
        return 'Full - time';
      case 'part - time':;
        return 'Part - time';
      case 'project - based':;
        return 'Project',
      default:;
        return status;
  }
    >;
      <Clock className='h - 3 w - 3' />;
      <span>{getAvailabilityLabel (availability_type)}</span>;
    </div>);
}
      <span>{getAvailabilityLabel(availabilityType)}</span>
  )
}
;
}
}
ursor/fix-website-loading-errors-and-merge-6662
  return (
    <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${getAvailabilityColor(availabilityType)}`}>
      <Clock className="h-3 w-3" />
  return (
    <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${getAvailabilityColor(availabilityType)}`}>
      <Clock className="h-3 w-3" />
      <span>{getAvailabilityLabel(availabilityType)}</span>
    </div>
  )
}
