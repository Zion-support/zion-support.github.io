return name;
      .split(' ');
      .map(part => part[0]);
      .join('');
      .toUpperCase();

      />;
      <AvatarFallback className="bg-zion-purple/20 text-zion-purple">;
        {getInitials(fullName)}
      </AvatarFallback>;
    </Avatar>;